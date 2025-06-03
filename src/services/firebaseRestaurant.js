import { db } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

const restaurantsCollection = collection(db, 'restaurants');

// Obtener todos los restaurantes
export const getRestaurants = async () => {
  try {
    const querySnapshot = await getDocs(restaurantsCollection);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting restaurants: ", error);
    throw error;
  }
};

// Añadir nuevo restaurante
export const addRestaurant = async (restaurant) => {
  try {
    const docRef = await addDoc(restaurantsCollection, restaurant);
    return { id: docRef.id, ...restaurant };
  } catch (error) {
    console.error("Error adding restaurant: ", error);
    throw error;
  }
};

// Actualizar restaurante
export const updateRestaurant = async (id, updates) => {
  try {
    const restaurantDoc = doc(db, 'restaurants', id);
    await updateDoc(restaurantDoc, updates);
  } catch (error) {
    console.error("Error updating restaurant: ", error);
    throw error;
  }
};

// Eliminar restaurante
export const deleteRestaurant = async (id) => {
  try {
    const restaurantDoc = doc(db, 'restaurants', id);
    await deleteDoc(restaurantDoc);
  } catch (error) {
    console.error("Error deleting restaurant: ", error);
    throw error;
  }
};