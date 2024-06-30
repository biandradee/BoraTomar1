import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface MapProps{}

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBMsuw7waXj-l1wO844Ai2agl2ppgABlqE"
    });

    return (
        <div className="h-[100vh]">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={{
                        lat: -10.92806335947935,
                        lng: -37.06878657207325,
                    }}
                    zoom={15}
                >
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Map;