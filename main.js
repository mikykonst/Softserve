$(document).ready(function () {
    $('.task-choose').click(function () {
        let task = '';
        task = ($(this).attr('id'));
        start(task);
    });
    let container = $("#taskContainer");

    let start = function (task) {
        switch (task) {
            case '1':
                clearContainer();
                container.append(task1());
                $('#submit-1').click(function () {
                    let w = $('#width').val();
                    let h = $('#height').val();
                    let s = $('#symbol').val();

                    chess(w, h, s);
                });

                break;
            case '2':
                clearContainer();
                let envelope1 = {};
                let envelope2 = {};
                container.append(task2());

                $('#submit-2').click(function () {
                    let w1 = $('#firstEnvSideA').val();
                    let h1 = $('#firstEnvSideB').val();
                    let w2 = $('#secondEnvSideA').val();
                    let h2 = $('#secondEnvSideB').val();

                    envelope1.w = parseFloat(w1);
                    envelope1.h = parseFloat(h1);

                    envelope2.w = parseFloat(w2);
                    envelope2.h = parseFloat(h2);

                    container.append('<pre>' + isEnvelopeFeet(envelope1, envelope2) + '</pre>');
                });


                break;
            case '3':
                clearContainer();
                let arrayOfTriangles = [];
                let num = +prompt('Input number of triangles:');
                if (validateNumbers(num)) {
                    task3(num);
                }

                $('#submit-3').click(function () {
                    let arr = [];
                    for (let i = 0; i < num; i++) {
                        let inputs = $('.triangle' + (i + 1));
                        for (let j = 0; j < inputs.length; j++) {
                            arr.push($(inputs[j]).val());
                        }
                    }
                    createTriangles(arr);
                });
                let createTriangles = function (arr) {
                    for (let i = 0; i < arr.length; i += 4) {
                        let temp = arr.slice(i, i + 4);
                        arrayOfTriangles.push({vertices: temp[0], a: +temp[1], b: +temp[2], c: +temp[3]});
                    }
                    alert(run(arrayOfTriangles).toString());
                };
                break;
            case '4':
                clearContainer();
                container.append(task4());
                $('#submit-4').click(function () {
                    $('#palindrome').text(findTheLongest($('#task4').val()));
                });
                break;
            case '5':
                clearContainer();
                container.append(task5());
                let tickets = [];
                $('#submit-5').click(function () {
                    tickets = [];
                    let inputs = $('.tickets');
                    for (let i = 0; i < inputs.length; i++) {

                        if (($(inputs[i]).val()).split('').length !== 6) {
                            alert('Input tickets only with six digits!');
                        } else {
                            tickets.push($(inputs[i]).val());
                        }
                    }
                    if (tickets[0] > tickets[1]) {
                        alert('First ticket must be smaller then second!');
                    } else {
                        alert(startTickets(tickets[0], tickets[1]));
                    }
                });
                break;
            case '6':
                clearContainer();
                container.append(task6());

                $('#submit-6').click(function () {
                    let n = parseInt($('.length').val());
                    let m = parseInt($('.max').val());
                    $('#sequence').text(createSequence(n, m).toString());
                });

                break;
            case '7':
                clearContainer();
                container.append(task7());

                break;
        }
    };
    let task1 = function () {
        let width = `<input id="width" required class="form-control input-val" type="number" placeholder="width">`;
        let height = `<input id="height" required class="form-control input-val" type="number" placeholder="height">`;
        let symbol = `<input id="symbol" required class="form-control input-val" type="text" placeholder="symbol" >`;
        let submit = `<input id="submit-1" class="btn btn-primary button" type="button" value="submit">`;

        return `<form>
            <legend>Task 1</legend>
                ${width}
                ${height}
                ${symbol}
                ${submit}
            </form>`
    };

    let task2 = function () {
        let firstEnvSideA = `<input id="firstEnvSideA" class="form-control input-val" type="number" placeholder="first side" required>`;
        let firstEnvSideB = `<input id="firstEnvSideB" class="form-control input-val" type="number" placeholder="second side" required>`;

        let secondEnvSideA = `<input id="secondEnvSideA" class="form-control input-val" type="number" placeholder="first side" required>`;
        let secondEnvSideB = `<input id="secondEnvSideB" class="form-control input-val" type="number" placeholder="second side" required>`;

        let submit = `<input id="submit-2" class="btn btn-primary button" type="button" value="submit">`;

        return `<fieldset>
                <legend>Task 2</legend>
                <form> 
                <legend>Envelope 1</legend>
                    ${firstEnvSideA}
                    ${firstEnvSideB}    
                </form>
                <form>
                <legend>Envelope 2</legend>
                    ${secondEnvSideA}
                    ${secondEnvSideB}
                </form>
                ${submit}
            </fieldset>`;
    };

    let task3 = function (count) {
        let submit = `<input id="submit-3" class="btn btn-primary" type="button" value="submit">`;
        container.append(`<fieldset class="form-group"></fieldset>`);
        for (let i = 0; i < count; i++) {
            let legend = `<legend>Triangle #${i + 1}</legend>`;
            let vertices = `<input class="triangle${i + 1} form-control" type="text" placeholder="Name of vertices">`;
            let sideOne = `<input class="triangle${i + 1} form-control" type="number" placeholder="side 1">`;
            let sideTwo = `<input class="triangle${i + 1} form-control" type="number" placeholder="side 2">`;
            let sideTree = `<input class="triangle${i + 1} form-control" type="number" placeholder="side 3">`;
            $('#taskContainer>fieldset').append(`${legend}
                                                 ${vertices}
                                                 ${sideOne}
                                                 ${sideTwo}
                                                 ${sideTree}`);
        }
        $('#taskContainer>fieldset').append(submit);
    };

    let task4 = function () {
        let wordInput = `<input id="task4" class="form-control" type="text" placeholder="Input palindrome">`;
        let submit = `<input id="submit-4" class="btn btn-primary" type="button" value="submit">`;

        return `<form>
                <legend>Task 4</legend>
                    ${wordInput}
                    <pre id="palindrome"></pre>
                    ${submit}
              </form>`
    };

    let task5 = function () {
        let firstTicket = `<input class="tickets form-control" type="number" placeholder="First ticket">`;
        let secondTicket = `<input class="tickets form-control" type="number" placeholder="Second ticket">`;
        let submit = `<input id="submit-5" class="btn btn-primary" type="button" value="submit">`;

        return `
                <form action="">
                    <legend>Task 5</legend>
                    ${firstTicket}
                    ${secondTicket}
                    ${submit}
                </form>`
    };

    let task6 = function () {
      let lenght = `<input class="form-control length" type="number" placeholder="Length of sequence">`;
      let maxElem = `<input class="form-control max" type="number" placeholder="Max element">`;
      let submit = `<input id="submit-6" class="btn btn-primary" type="button" value="submit">`;

      return `<form>
                <legend>Task 6</legend>
                ${lenght}
                ${maxElem}
                <pre id="sequence"></pre>
                ${submit}
              </form>`;
    };

    let task7 = function () {
      let min = `<input id="min" class="form-control" type="number" placeholder="min or length">`;
      let max = `<input id="max" class="form-control" type="number" placeholder="max">`;
      let submit = `<input id="submit-7" class="btn btn-primary" value="submit">`;

      return `<form>
                <legend>Task7</legend>
                ${min}
                ${max}
                <pre id="fib"></pre>
                ${submit}
              </form>`
    };

    let clearContainer = function () {
        container.html('');
    };
});