const formPages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.progres__step');
const progresBar = document.querySelector('.progres__bar');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
let currentStep = 1;

const handleNextBtn = () => {
	currentStep++;
	if (currentStep > steps.length) {
		currentStep = steps.length;
	}
	handleProgresBar();
};
const handlePrevBtn = () => {
	currentStep--;
	if (currentStep < 1) {
		currentStep = 1;
	}
	handleProgresBar();
};

const handleProgresBar = () => {
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step');
		} else {
			step.classList.remove('active-step');
		}
	});
	const adctiveSteps = document.querySelectorAll('.active-step');
	progresBar.style.width =
		((adctiveSteps.length - 1) / (steps.length - 1)) * 100 + '%';
	disabledBtns();
	activePages();
};

const disabledBtns = () => {
	if (currentStep === 1) {
		prevBtn.disabled = true;
	} else if (currentStep === steps.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}
};

const activePages = () => {
	formPages.forEach((page) => {
		const activePage = page.dataset.number;

		if (activePage == currentStep) {
			page.classList.add('active-page');
		} else {
			page.classList.remove('active-page');
		}
	});
};

nextBtn.addEventListener('click', handleNextBtn);
prevBtn.addEventListener('click', handlePrevBtn);
