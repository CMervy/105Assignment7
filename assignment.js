function createMulti(){
    var userinput = Number(window.prompt(`Select a number`))
    for(let i=1; i<11; i++){
        let item = document.createElement(`li`)
        item.innerHTML = `${userinput} * ${i} = ${userinput * i}`
        document.getElementById(`ul`).appendChild(item)
    }
}


