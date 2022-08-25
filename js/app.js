function postText(collectAreaId, postAreaId, wordCountShow = 0) {
    const writtenTextField = document.getElementById(collectAreaId);
    const writtenText = writtenTextField.value;

    if(wordCountShow == 1){
        const wordCountField = document.getElementById('word-count');
        wordCountField.parentNode.style.display = "block";
        const wordCount = writtenText.split(' ').length;
        wordCountField.innerText = wordCount;  
    }

    writtenTextField.parentNode.removeChild(writtenTextField);

    const postText = document.getElementById(postAreaId);
    postText.innerText = writtenText;
}

document.getElementById('postq-btn').addEventListener('click', function(event){
    event.target.disabled = true;
    event.target.style.backgroundColor = "gray";
    document.getElementById('post-question').classList.add('p-2');
    
    postText('question-area', 'post-question');
})

document.getElementById('start-btn').addEventListener('click', function(event){
    event.target.disabled = true;
    event.target.style.backgroundColor = "gray";
    document.getElementById('post-question').classList.add('mb-4');

    document.getElementById('answer-area').disabled = false;
    document.getElementById('answer-area').innerText = '';

    const timeOver = setTimeout(postText, 1800000, 'answer-area', 'post-answer', 1);
})

