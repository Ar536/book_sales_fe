import Button from './Button'

export default function Main(props){
    const {tech, btn} = props;

    return(
        <main>
            {/* props : btn= */}
            <h1>Halo, saya sedang belajar React {tech}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, numquam.</p>
            <Button txt={btn}/>
        </main>
    )
}