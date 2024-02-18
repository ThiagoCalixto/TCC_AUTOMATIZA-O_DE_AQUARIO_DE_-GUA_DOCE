import { createContext, useState, useContext, useCallback } from 'react';
import { LocationProps } from '../../services/currentLocation';

interface CurrentLocationProviderProps {
  children: React.ReactNode;
}

interface CurrentLocationData {
  currentLocation: LocationProps;
  handleSetCurrentLocation(location: LocationProps): void;
}

const CurrentLocationContext = createContext<CurrentLocationData>({} as CurrentLocationData);

export const CurrentLocationProvider: React.FC<CurrentLocationProviderProps> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<LocationProps>({} as LocationProps);
  
  const handleSetCurrentLocation = useCallback((location: LocationProps) => {
    setCurrentLocation(location);
  },[])
  
  return (
    <CurrentLocationContext.Provider
      value={{currentLocation, handleSetCurrentLocation}}
    >
    {children}
    </CurrentLocationContext.Provider>
  )
}

export function useCurrentLocationContext(): CurrentLocationData {
  const context = useContext(CurrentLocationContext);

  if (!context) {
    throw new Error("useCurrentLocationContext must be used within an CurrentLocationProvider");
  }

  return context;
}