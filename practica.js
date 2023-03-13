export default function intersection1(arr1, arr2) {
    // Tu código aquí
    let arrRes = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr1[i]) {
                arrRes.push(arr2[j])
            }
        }
    }
    return arrRes
}

export default function intersection2(arr1, arr2) {
    // Tu código aquí
    return arrRes = arr1.filter(el => {
        if (arr2.includes(el)) return el
    }
    )

}




//arrays ordenados:
// console.log(intersection([1,2, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20]))//[2, 3, 10];
// console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20]))//[3, 10];
// console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20]))//[];

//arrays desordenados:

// console.log(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8]))//[10,3])

export default function SolveGraph(graph, start, target) {
    let visitados = new Set();
    let cola = [start];
    while (cola.length > 0) {
        let verticeActual = cola.shift();
        if (verticeActual === target) {
            return true;
        }
        visitados.add(verticeActual);
        for (let vecino of graph[verticeActual] || []) {
            if (!visitados.has(vecino)) {
                cola.push(vecino);
            }
        }
    }
    return false;
}

const graph = {
    a: ["c"], //pregunta x c y espera...
    b: ["c"],
    c: ["s", "r"],//pregunta x s y espera...
    d: ["a"],
    s: ["a", "c"],//pregunta x a y espera...
    r: ["d"],
    z: ["z"],
};
// console.log(SolveGraph(graph, "a", "c"))//true;
// console.log(SolveGraph(graph, "a", "r"))//true;
// console.log(SolveGraph(graph, "a", "d"))//true;
// console.log(SolveGraph(graph, "s", "b"))//false;

export default function HasBalancedBrackets(string) {
    const stack = [];
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (brackets[char]) {
            // Si es un bracket de apertura, lo agregamos a la pila
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            // Si es un bracket de cierre, comprobamos que el último bracket abierto sea del mismo tipo
            const lastOpenBracket = stack.pop();
            if (brackets[lastOpenBracket] !== char) {
                return false;
            }
        }
    }

    // Verificamos que no haya brackets sin cerrar
    return stack.length === 0;
}

//DESCOMENTAR PARA REALIZAR LAS PRUEBAS
//Hint: de uno en uno.
console.log(HasBalancedBrackets("{}"));
// console.log(HasBalancedBrackets("{[]()}")); //true
// console.log(HasBalancedBrackets("{[(])}")); //false
// console.log(HasBalancedBrackets("{[("));//false
// console.log(HasBalancedBrackets("{[([{()[]{}}])]}"));//true
// console.log(HasBalancedBrackets("{[]}}"));//false
