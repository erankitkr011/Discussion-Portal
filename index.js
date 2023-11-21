// app.js
document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var question = document.getElementById('question').value;
    var questionBox = document.createElement('div');
    questionBox.textContent = title;
    questionBox.addEventListener('click', function() {
        document.getElementById('rightPane').innerHTML = '<h2>' + title + '</h2><p>' + question + '</p><form id="responseForm"><input type="text" id="name" placeholder="Name" required><textarea id="comment" placeholder="Comment" required></textarea><button type="submit">Submit</button></form><div id="responses"></div><button id="resolve">Resolve</button>';
        document.getElementById('responseForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var comment = document.getElementById('comment').value;
            var response = document.createElement('p');
            response.textContent = name + ': ' + comment;
            document.getElementById('responses').appendChild(response);
        });
        document.getElementById('resolve').addEventListener('click', function() {
            document.getElementById('leftPane').removeChild(questionBox);
            document.getElementById('rightPane').innerHTML = '<form id="questionForm"><input type="text" id="title" placeholder="Title" required><textarea id="question" placeholder="Question" required></textarea><button type="submit">Submit</button></form>';
        });
    });
    document.getElementById('leftPane').appendChild(questionBox);
});