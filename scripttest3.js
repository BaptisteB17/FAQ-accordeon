document.addEventListener('DOMContentLoaded', function () {
    // Get all the subheader elements
    const subheaders = document.querySelectorAll('.subheader');

    // Add click event listener to each subheader
    subheaders.forEach(subheader => {
        subheader.addEventListener('click', function () {

            // Toggle the display property of the answer element in the same group
            const currentAnswer = this.nextElementSibling;
            currentAnswer.classList.toggle('hidden');

            // Toggle the hidden class on the plusIcon and minusIcon in the same group
            const plusIcon = this.querySelector('.plus');
            const minusIcon = this.querySelector('.minus');
            plusIcon.classList.toggle('hidden');
            minusIcon.classList.toggle('hidden');

            // Loop through all other groups and add/remove hidden class accordingly
            document.querySelectorAll('.group').forEach(group => {
                if (group !== currentAnswer.parentElement) {
                    const otherAnswer = group.querySelector('.answer');
                    const otherPlusIcon = group.querySelector('.plus');
                    const otherMinusIcon = group.querySelector('.minus');

                    otherAnswer.classList.add('hidden');
                    otherPlusIcon.classList.remove('hidden');
                    otherMinusIcon.classList.add('hidden');
                }
            });
        });
    });
});
