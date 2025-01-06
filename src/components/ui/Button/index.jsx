export default function Button(props){
    return(
        <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{props.txt}</button>
    )
}