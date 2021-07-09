const r = 200;
let total = 0;
let circle = 0;
let recordPI = 0;
let resultP;

function setup() 
{
    createCanvas(402, 402);
    resultP = createP('Approximated Value:');
    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(0, 0, r * 2, r * 2);
    rectMode(CENTER);
    rect(0, 0, r * 2, r * 2);
}

function draw() 
{
    translate(width / 2, height / 2);
    for (let i = 0; i < 10000; i++) 
    {
        const x = random(-r, r);
        const y = random(-r, r);
        total++;

        const d = x * x + y * y;
        if (d < r * r) 
        {
            circle++;
            stroke('#DA0037');
        } 
        else 
        {
            stroke('#444444');
        }
        strokeWeight(1);
        point(x, y);

        const pi = 4 * (circle / total);
        let recordDiff = Math.abs(Math.PI - recordPI);
        let diff = Math.abs(Math.PI - pi);
        if (diff < recordDiff) 
        {
            recordDiff = diff;
            recordPI = pi;
            resultP.html(`Approximated Value: ${recordPI}`);
        }
    }
}
