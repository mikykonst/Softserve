$(document).ready(function () {
    $('.task-choose').click(function () {
        let task = ($(this).attr('id'));
        start(task);
    });
    let container = $("#taskContainer");

    let start = function (task) {
        switch (task) {
            case '1':
                clearContainer();
                container.append(task1);
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
                container.append(task2);

                $('#submit-2').click(function () {
                    let w1 = $('#firstEnvSideA').val();
                    let h1 = $('#firstEnvSideB').val();
                    let w2 = $('#secondEnvSideA').val();
                    let h2 = $('#secondEnvSideB').val();

                    envelope1.w = parseFloat(w1);
                    envelope1.h = parseFloat(h1);

                    envelope2.w = parseFloat(w2);
                    envelope2.h = parseFloat(h2);

                    $('#env').text(isEnvelopeFeet(envelope1, envelope2));
                });


                break;
            case '3':
                clearContainer();
                let arrayOfTriangles = [];
                let num = prompt('Input number of triangles:');
                if (!isFloat(num) && validateNumbers(parseInt(num))) {
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
                    arrayOfTriangles = [];
                    for (let i = 0; i < arr.length; i += 4) {
                        let temp = arr.slice(i, i + 4);
                        arrayOfTriangles.push(new Triangle(temp[0],temp[1],temp[2], temp[3]));
                    }
                    alert(runTriangles(arrayOfTriangles).toString());
                };
                break;
            case '4':
                clearContainer();
                container.append(task4);
                $('#submit-4').click(function () {
                    $('#palindrome').text(findTheLongest($('#task4').val()));
                });
                break;
            case '5':
                clearContainer();
                container.append(task5);
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
                        $('#ticket').text(startTickets(tickets[0], tickets[1]));
                    }
                });
                break;
            case '6':
                clearContainer();
                container.append(task6);

                $('#submit-6').click(function () {
                    let n = parseInt($('.length').val());
                    let m = parseInt($('.max').val());
                    $('#sequence').text(createSequence(n, m).toString());
                });

                break;
            case '7':
                clearContainer();
                container.append(task7);
                $('#submit-7').click(function () {
                    let min = parseInt($('#min').val());
                    let max = parseInt($('#max').val());
                    $('#fib').text(findIntervalFib(min, max).toString());
                });
                break;
        }
    };
    let task1 = `<form>
                    <legend>Task 1</legend>
                    <input id="width" required class="form-control input-val" type="number" placeholder="width">
                    <input id="height" required class="form-control input-val" type="number" placeholder="height">
                    <input id="symbol" required class="form-control input-val" type="text" placeholder="symbol" >
                    <input id="submit-1" class="btn btn-outline-primary btn-lg btn-block" type="button" value="submit">
                  </form>`;

    let task2 = `<fieldset>
                    <legend>Task 2</legend>
                        <form> 
                            <legend>Envelope 1</legend>
                            <input id="firstEnvSideA" class="form-control input-val" type="number" placeholder="first side" required>
                            <input id="firstEnvSideB" class="form-control input-val" type="number" placeholder="second side" required>    
                        </form>
                        <form>
                            <legend>Envelope 2</legend>
                            <input id="secondEnvSideA" class="form-control input-val" type="number" placeholder="first side" required>
                            <input id="secondEnvSideB" class="form-control input-val" type="number" placeholder="second side" required>
                        </form>
                        <pre id="env"></pre>
                        <input id="submit-2" class="btn btn-outline-primary btn-lg btn-block" type="button" value="submit">
                </fieldset>`;

    let task3 = function (count) {
        container.append(`<fieldset class="form-group"></fieldset>`);
        for (let i = 0; i < count; i++) {
            $('#taskContainer>fieldset').append(`<legend>Triangle #${i + 1}</legend>
                                                 <input class="triangle${i + 1} form-control" type="text" placeholder="Name of vertices">
                                                 <input class="triangle${i + 1} form-control" type="number" placeholder="side 1">
                                                 <input class="triangle${i + 1} form-control" type="number" placeholder="side 2">
                                                 <input class="triangle${i + 1} form-control" type="number" placeholder="side 3">`);
        }
        $('#taskContainer>fieldset').append(`<input id="submit-3" class="btn btn-outline-primary btn-lg btn-block" type="button" value="submit">`);
    };

    let task4 = `<form>
                <legend>Task 4</legend>
                    <input id="task4" class="form-control" type="text" placeholder="Input palindrome">
                    <pre id="palindrome"></pre>
                    <input id="submit-4" class="btn btn-outline-primary btn-lg btn-block" type="button" value="submit">
              </form>`;

    let task5 = `<form action="">
                    <legend>Task 5</legend>
                    <input class="tickets form-control" type="number" placeholder="First ticket">
                    <input class="tickets form-control" type="number" placeholder="Second ticket">
                    <pre id="ticket"></pre>
                    <input id="submit-5" class="btn btn-outline-primary btn-lg btn-block" type="button" value="submit">
                </form>`;

    let task6 = `<form>
                <legend>Task 6</legend>
                <input class="form-control length" type="number" placeholder="Length of sequence">
                <input class="form-control max" type="number" placeholder="Max element">
                <pre id="sequence"></pre>
                <input id="submit-6" class="btn btn-outline-primary btn-lg btn-block" type="button" value="submit">
              </form>`;

    let task7 = `<form>
                <legend>Task7</legend>
                <input id="min" class="form-control" type="number" placeholder="min or length">
                <input id="max" class="form-control" type="number" placeholder="max">
                <pre id="fib"></pre>
                <input id="submit-7" class="btn btn-outline-primary btn-lg btn-block" value="submit">
              </form>`;

    let clearContainer = function () {
        container.html('');
    };
});