import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  setDoc
} from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getDatabase } from "firebase/database";

// Firebase configuration from your environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

/**
 * Creates a new user with email and password and stores additional user data in Firestore.
 */
async function createUser(email, password, additionalData = {}) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created with email:', userCredential.user.email);
    const userDocRef = doc(db, "users", userCredential.user.uid);
    await setDoc(userDocRef, { ...additionalData, email: userCredential.user.email });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  }
}

/**
 * Signs out the currently signed-in user.
 */
async function logoutUser() {
  try {
    await signOut(auth);
    console.log('User signed out successfully');
  } catch (error) {
    console.error("Error signing out:", error);
    throw new Error("Sign out failed");
  }
}

/**
 * Fetches and returns a list of users from Firestore.
 */
async function getUsers() {
  try {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

/**
 * Fetches and returns a list of trainings from Firestore.
 */
async function getTrainings() {
  try {
    const trainingsCol = collection(db, "trainings");
    const trainingSnapshot = await getDocs(trainingsCol);
    return trainingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching trainings:", error);
    throw new Error("Failed to fetch trainings");
  }
}


// Define updateUserRole function
const updateUserRole = async (userId, newRole) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, { role: newRole });
};

// Define sendTrainingInvite function
const sendTrainingInvite = async (userId, trainingId) => {
  // Example implementation, adjust according to your needs
  const inviteRef = collection(db, "invites");
  await addDoc(inviteRef, { userId, trainingId });
};

// Define importUsersFromCsv function
const importUsersFromCsv = async (csvFile) => {
  // Implementation depends on how you handle CSV files
};

// Initialize Database
const database = getDatabase(app);

// Export the newly defined functions and the database
export {
  app,
  auth,
  db,
  database,
  functions,
  googleProvider,
  createUser,
  logoutUser,
  getUsers,
  getTrainings,
  updateUserRole,
  sendTrainingInvite,
  importUsersFromCsv,
  // Add other exports here...
};