// Solution #1 (bad)

// function toggle(id) {
//     var elementToDisplay = document.getElementById(id);

//     [...document.querySelectorAll('.profileActionsContent')].map(function(profileActionsContent) {
//         profileActionsContent.style.display = 'none'
//     })

//     elementToDisplay.style.display = 'block'
// }

// window.onload = function() {
//     toggle('one')   
// }


// Solution #2 (ok)

var State = {
    activeProfileActionsContentId: 'one',
    profileActionTabPrefix: 'profileActionTab_',
    setDefaultActiveProfileActionsContent() {
        this.setProfileActionsContentDisplay(this.activeProfileActionsContentId, 'block')

        document.getElementById(this.profileActionTabPrefix + this.activeProfileActionsContentId).classList.add('color-main')
    },
    setActiveProfileActionsContent(profileActionsContentId, event) {
        if (this.activeProfileActionsContentId == profileActionsContentId) {
            return
        }

        this.setProfileActionsContentDisplay(profileActionsContentId, 'block');
        event.target.classList.add('color-main')

        this.setProfileActionsContentDisplay(this.activeProfileActionsContentId, 'none'); 
        document.getElementById(this.profileActionTabPrefix + this.activeProfileActionsContentId).classList.remove('color-main')

        this.activeProfileActionsContentId = profileActionsContentId
    },
    setProfileActionsContentDisplay(profileActionsContentId, display) {
        document.getElementById(profileActionsContentId).style.display = display
    }
}

State.setDefaultActiveProfileActionsContent()