// import forwardRef so 
import { forwardRef } from 'react';
import '../App.css';

const Header = forwardRef((_props, ref) => {
    return (
<header ref={ref}>
    <div className='wrapper'>
    <h1>FILMRECS</h1>
    <p>Movie recommendations for when you can't decide what to watch</p>
    </div>
</header>
    )
})

export default Header