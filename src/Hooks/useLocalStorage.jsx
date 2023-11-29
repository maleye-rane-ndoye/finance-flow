import { useState, useEffect } from "react";



//on export une fonction qui prend deux parametres : une clef et sa valeur par defeaut

export default function useLocalStorage(key, defaultValue){

//on crée un tableau de valeur avec usestate qui comprend chaque valeur et une valeur globale de base
//je construit une variable jsonValue qui est egale à un element retourné depuis localstorage si on passe un clef a localstorage qui va cherhcer cette element via la fonction getItem


        const [value, setValue] = useState( () => {

            const jsonValue = localStorage.getItem(key)
            if(jsonValue != null)return JSON.parse(jsonValue)  //si l'element retouné n'est pas null , donc elle retourne la valeur en format json via la fonction parse qui est un convertisseur JS des objets


            if(typeof defaultValue === "function"){
                return defaultValue()
            }else{
                return defaultValue
            }

        })

        useEffect( () => {
            localStorage.setItem(key, JSON.stringify(value))
        },[value, setValue])


        return [value, setValue]









}