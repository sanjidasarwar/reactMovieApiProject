function Celebrity({person}) {
const {name, id, profile_path} =person
    const imgSrc = `https://image.tmdb.org/t/p/original/${profile_path}`
    return ( 
        <div key={id}>
                    <img className='rounded-lg' src={imgSrc} alt="" srcSet="" />
                    <h3 className='text-lg font-bold text-white title' title={name}>{name}{id}</h3>
        </div>
     );
}

export default Celebrity;