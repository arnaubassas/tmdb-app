import { language } from "./const";

const dateModify=(date:string)=>{
    const newdate = new Date(date);
    return(newdate.toLocaleDateString(language, {
        day: "numeric",
        month: "short",
        year: "numeric",
      }))
}

export {dateModify}