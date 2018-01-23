$("#chooseBtn").click(function () {
    let task = $("#select").val();
    let container = $("#taskContainer");

    switch (task) {
        case '1':
            let w = prompt('Input width:');
            let h = prompt('Input height:');
            let s = prompt('Input symbol:');
            chess(w, h, s);
            break;
        case '2':
            let fs1 = prompt('Input first side of first envelope:');
            let ss1 = prompt('Input second side of first envelope:');
            let fs2 = prompt('Input first side of second envelope:');
            let ss2 = prompt('Input second side of second envelope:');
            let envelope1 = {width: +fs1, height: +ss1};
            let envelope2 = {width: +fs2, height: +ss2};
            container.append('<p>'+isEnvelopeFeet(envelope1, envelope2)+'</p>');
            break;
        case '3':
            let arrayOfTriangles = [];
            let num = prompt('Input number of triangles:');
            let res = [];

            for (let i = 0; i < num; i++) {
                let name = prompt('Input name:');
                let a = prompt('Input A-side:');
                if (validateNumbers(parseFloat(a))) {
                    alert(parseFloat(a));
                    alert('Incorrect input, try again!');
                    a = prompt('Input A-side');
                }
                let b = prompt('Input B-side:');
                if (validateNumbers(parseFloat(b))) {
                    alert('Incorrect input, try again!');
                    b = prompt('Input B-side');
                }
                let c = prompt('Input C-side:');
                if (validateNumbers(parseFloat(c))) {
                    alert('Incorrect input, try again!');
                    c = prompt('Input C-side');
                }


                let triangle = {vertices: name, a: parseFloat(a), b: parseFloat(b), c: parseFloat(c)};

                arrayOfTriangles.push(triangle);

            }

            res = run(arrayOfTriangles);
            break;
        case '4':
            let word = prompt('Input word:');
            container.append('<p>The longest palindrome in word <b>'+ word +'</b> is <b>' + findTheLongest(word) + '</b></p>');
            break;
        case '5':
            alert(inputValues());
            break;
        case '6':
            let length = prompt('Input length of the sequence:');
            let max = prompt('Input max elem');

            container.append('<p>The sequence of ' + length + ' elements is ' + createSequence(length, max).toString() +'</p>');

            break;
        case '7':
            let minOrLength = prompt('Input min number or the length:');
            let maxOrNth = prompt('Input max number or nothing:');

            container.append('<p>'+ findIntervalFib(+minOrLength, +maxOrNth) +'</p>');

            break;
    }
    // let container = $("#taskContainer");
    //
    // switch (task) {
    //     case '1':
    //         container.text('').append(`
    //         <fieldset>
    //                 <legend>Task 1</legend>
    //                 <input class="form-control input-val" type="number" placeholder="width" required>
    //                 <input class="form-control input-val" type="number" placeholder="height" required>
    //                 <input class="form-control input-val" type="number" placeholder="symbol" required>
    //                 <input id="submit-1" class="btn btn-primary button" type="button" value="submit">
    //             </fieldset>
    //         `);
    //         break;
    //     case '2':
    //         container.text('').append(`
    //         <fieldset>
    //             <legend>Task 2</legend>
    //             <fieldset>
    //                 <legend>First envelope:</legend>
    //                 <input class="form-control input-val" type="number" placeholder="first side" required>
    //                 <input class="form-control input-val" type="number" placeholder="second side" required>
    //             </fieldset>
    //             <fieldset>
    //                 <legend>Second envelope:</legend>
    //                 <input class="form-control input-val" type="number" placeholder="first side" required>
    //                 <input class="form-control input-val" type="number" placeholder="second side" required>
    //             </fieldset>
    //             <input id="submit-2" class="btn btn-primary button" type="button" value="submit">
    //         </fieldset>`);
    //         break;
    //     case '3':
    //         container.text('').append();
    //         break;
    //     case '4':
    //         alert(2);
    //         break;
    //     case '5':
    //         alert(1);
    //         break;
    //     case '6':
    //         alert(2);
    //         break;
    //     case '7':
    //         alert(1);
    //         break;
    // }
});