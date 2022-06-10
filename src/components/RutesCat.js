import React from 'react'
import { urlLevel1, urlLevel2,urlLevel3, urlLevel4, urlLevel5 } from '../helpers/url'
const RutesCat = (categories) => {

let preguntas = []

if(categories.includes('level1')){
    preguntas = urlLevel1
}if(categories.includes('level2')){
    preguntas = urlLevel2
}if(categories.includes('level3')){
    preguntas = urlLevel3
}if(categories.includes('level4')){
    preguntas = urlLevel4
}if(categories.includes('level5')){
    preguntas = urlLevel5
}

  return preguntas
}

export default RutesCat