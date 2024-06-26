import {ColorRing} from 'react-loader-spinner';

function SpinerLoader() {
    return ( 
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{position:'absolute, top:50%, left:50%, backgroundColor:#000'}}
        wrapperClass="color-ring-wrapper absolute top-[50%] left-[50%]"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
     );
}

export default SpinerLoader;