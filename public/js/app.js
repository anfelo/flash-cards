const hint = document.getElementById('hint');
const btn = document.getElementById('show-btn');

function toggleHint () {
	if(hint.style.display === 'block') {
		hint.style.display = 'none';
	}
	else {
		hint.style.display = 'block';
		btn.style.display = 'none';
	}
}

btn.addEventListener('click', toggleHint);
