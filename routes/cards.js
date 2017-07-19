const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// GET /cards
router.get('/', (req,res) => {
		const randomCard = Math.floor(Math.random() * cards.length);
		res.redirect(`/cards/${randomCard}`);
});

// GET /cards/:id
router.get('/:id', (req, res) => {
		const { side } = req.query;
		const { id } = req.params;

		if(!side) {
			return res.redirect(`/cards/${id}?side=question`);
		}

		if( side === 'hint') {
			return res.redirect(`/cards/${id}?side=question`);
		}
		const name = req.cookies.username;
		const text = cards[id][side];
		const { hint } = cards[id];

		const templateData = {id, text, name, side};

		if (side === 'question') {
			templateData.hint = hint;
			templateData.sideToShow = 'answer';
		} else {
			templateData.sideToShow = 'question';
		}

    res.render('card', templateData);
});

module.exports = router;