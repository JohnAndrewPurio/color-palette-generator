function colorGenerator(total) {
    const result = [];
    const r =  '0' + Math.floor(( Math.random() * 256 )).toString(16);
    const g =  '0' + Math.floor(( Math.random() * 256 )).toString(16);
    const b =  '0' + Math.floor(( Math.random() * 256 )).toString(16);

    const color = '#' + r.substr(-2) + g.substr(-2) + b.substr(-2);

    for(let count = 0; count < total; count++) {
        const portion = (255 / total) * (count + 1);
        const alpha = Math.floor(portion).toString(16);

        result.push( color + alpha );
    }

    return result;
}

export default function ColorGen() {
    const colors = colorGenerator(6);

    return  (
        colors.map( color => {
            return <div className="colorBlock" style={{backgroundColor: color}}></div>
        })
    );
}