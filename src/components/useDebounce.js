  import {useEffect,useState} from "react";
  function useDebounce(value,delay=1000){
    const [debounceText,setDebounceText]=useState(value)
    useEffect(()=>{
      const timeout=setTimeout(()=>{
        setDebounceText(value)
      },delay)
      return()=>{
        clearTimeout(timeout)
      }
    }
    ,[value,delay])
    return debounceText;

  }
  export default useDebounce;