import { editAd } from "./editAd.js";
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export function editAdControler() {
    editAdFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token')

        const formData = new FormData(editAdFormElement);
        
        const editAvatar = formData.get('userAvatar')
        const editName = formData.get('editName');
       
        let index = editAdFormElement.editSelect.selectedIndex
        let editSelect =  0;
        if (index === 0) {
            editSelect = 'vende';
        } else {
            editSelect = 'busca';
        }
        
        const editPrice = formData.get('editPrice');
        const editPhoto = formData.get('editPhoto');
        const editDescription = formData.get('editDescription');
        //const editTag = formData.get('editTag');
    })

}