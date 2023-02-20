// get input an input process function
let serial = 0;
function getInputById(idOfFirstFigure, idOfSecondFigure, extraValue) {

    const firstMeasurementOfFigure = document.getElementById(idOfFirstFigure).value;
    const secondMeasurementOfFigure = document.getElementById(idOfSecondFigure).value;

    if (isNaN(firstMeasurementOfFigure) || isNaN(secondMeasurementOfFigure) || firstMeasurementOfFigure <= 0 || secondMeasurementOfFigure <= 0) {
        alert("Invalid input. Input must be positive numbers.");
    }
    const areaOfFigure = parseFloat(extraValue) * firstMeasurementOfFigure * secondMeasurementOfFigure;
    document.getElementById(idOfFirstFigure).value = '';
    document.getElementById(idOfSecondFigure).value = '';
    return areaOfFigure;
}


// create and append function
function createAndAppend(IdOfFigureName, areaOfFigure) {

    const figureName = document.getElementById(IdOfFigureName).innerText;
    const table = document.getElementById('tableContainer');
    const tr = document.createElement('tr');
    const cm = '<span>cm<sup>2</sup></span>';
    const figureArea = areaOfFigure + cm;
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${figureName}</td>
        <td>${figureArea}</td> 
        `;

    const button = '<button class="btn btn-primary m-3 ">Convert to m<sup>2</sup></button>';

    tr.innerHTML += button;
    table.appendChild(tr);
}

// formatNumber Function- this function is used for fixing the digit after decimal point.
function formatNumber(numb) {
    if (Number.isInteger(numb)) {
        return numb.toString();
    } else {
        return numb.toFixed(2);
    }
}


// Triangle
document.getElementById('triangleBtn').addEventListener('click', function () {
    
    const result = getInputById('bOfTriangle', 'hOfTriangle', '0.5');
    if (result !== 'undefined' && result >= 1) {
        const finalResult = formatNumber(result);
        serial += 1;
        createAndAppend('triangle', finalResult);
    }
})
// Rectangle
document.getElementById('rectangleBtn').addEventListener('click', function () {
   
    const result = getInputById('wOfRectangle', 'lOfRectangle', '1');
    if (result !== 'undefined' && result >= 1) {
        const finalResult = formatNumber(result);
        serial += 1;
        createAndAppend('rectangle', finalResult);
    }
})

// Parallelogram
document.getElementById('parallelogramBtn').addEventListener('click', function () {
    
    const result = getInputById('bOfParallelogram', 'hOfParallelogram', '1');
    if (result !== 'undefined' && result >= 1) {
        const finalResult = formatNumber(result);
        serial += 1;
        createAndAppend('parallelogram', finalResult);
    }
})


// Rhombus
document.getElementById('rhombusBtn').addEventListener('click', function () {
    
    const result = getInputById('d1Rhombus', 'd2Rhombus', '0.5');
    if (result !== 'undefined' && result >= 1) {
        const finalResult = formatNumber(result);
        serial += 1;
        createAndAppend('rhombus', finalResult);
    }
})


// Pentagon
document.getElementById('pentagonBtn').addEventListener('click', function () {
    
    const result = getInputById('pOfPentagon', 'bOfPentagon', '0.5');
    if (result !== 'undefined' && result >= 1) {

        const finalResult = formatNumber(result);
        serial += 1;
        createAndAppend('pentagon', finalResult);
    }
})
// Ellipse
document.getElementById('ellipseBtn').addEventListener('click', function () {
    
    let pi = Math.PI;
    const result = getInputById('aOfEllipse', 'bOfEllipse', pi);
    if (result !== 'undefined' && result >= 1) {
        const finalResult = formatNumber(result);
        serial += 1;
        createAndAppend('ellipse', finalResult);
    }
})




// random color generate
const element1 = document.querySelector('.card1');
element1.addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element1.style.backgroundColor = `#${randomColor}`;
})

element1.addEventListener('mouseleave', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element1.style.backgroundColor = `#${randomColor}`;
})



const element2 = document.querySelector('.card2');
element2.addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element2.style.backgroundColor = `#${randomColor}`;
})

element2.addEventListener('mouseleave', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element2.style.backgroundColor = `#${randomColor}`;
})



const element3 = document.querySelector('.card3');
element3.addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element3.style.backgroundColor = `#${randomColor}`;
})

element3.addEventListener('mouseleave', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element3.style.backgroundColor = `#${randomColor}`;
})



const element4 = document.querySelector('.card4');
element4.addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element4.style.backgroundColor = `#${randomColor}`;
})

element4.addEventListener('mouseleave', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element4.style.backgroundColor = `#${randomColor}`;
})




const element5 = document.querySelector('.card5');
element5.addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element5.style.backgroundColor = `#${randomColor}`;
})

element5.addEventListener('mouseleave', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element5.style.backgroundColor = `#${randomColor}`;
})




const element6 = document.querySelector('.card6');
element6.addEventListener('mouseenter', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element6.style.backgroundColor = `#${randomColor}`;
})

element6.addEventListener('mouseleave', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element6.style.backgroundColor = `#${randomColor}`;
})



