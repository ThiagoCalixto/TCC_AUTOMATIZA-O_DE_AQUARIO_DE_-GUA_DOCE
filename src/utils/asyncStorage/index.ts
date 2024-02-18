import AsyncStorage from '@react-native-async-storage/async-storage';

export async function AsyncStorageSaveItem(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

export async function AsyncStorageRemoveItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    // saving error
  }
}

export async function AsyncStorageRemoveAll(): Promise<void> {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // saving error
  }
}

export async function AsyncStorageGetItem(key: string): Promise<string | null | undefined> {
  try {
    const value = await AsyncStorage.getItem(key);
    
    return value;
  } catch(e) {
    // error reading value
  }
}
