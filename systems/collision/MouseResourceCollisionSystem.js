import {observer} from "../../Observable.js";
import { incResource, FloatingMessage, floatingMessages } from "../../utils.js";
import {entityManager} from "../../EntityManager.js";

function MouseResouceCollisionSystem(mouseX, mouseY, mouseWidth, mouseHeight) {

    entityManager.resources.forEach(entity => {
        const positionComponent = entity.getComponent("PositionComponent");
        const sizeComponent = entity.getComponent("SizeComponent");
        const textComponent = entity.getComponent("TextComponent");
        if (!(
            positionComponent.x > mouseX + mouseWidth ||
            positionComponent.x + sizeComponent.width < mouseX ||
            positionComponent.y > mouseY + mouseHeight ||
            positionComponent.y + sizeComponent.height < mouseY
         ))
        {
            observer.notify("Recource taken");
            entityManager.remove(entity);
            floatingMessages.push(new FloatingMessage('+' + textComponent.text,
            positionComponent.x, positionComponent.y, 
            30, 'green'));
            incResource(parseInt(textComponent.text));
        }
    });
}

// function MouseResouceCollisionSystem(entities, mouseX, mouseY, mouseWidth, mouseHeight) {

//     entities.forEach(entity => {
//         if(entity.name !== "Resource") return;
//         const positionComponent = entity.getComponent("PositionComponent");
//         const sizeComponent = entity.getComponent("SizeComponent");
//         const textComponent = entity.getComponent("TextComponent");
//         if (!(
//             positionComponent.x > mouseX + mouseWidth ||
//             positionComponent.x + sizeComponent.width < mouseX ||
//             positionComponent.y > mouseY + mouseHeight ||
//             positionComponent.y + sizeComponent.height < mouseY
//          ))
//         {
//             observer.notify("Recource taken");
          
//             entities.delete(entity.id);
//             floatingMessages.push(new FloatingMessage('+' + textComponent.text,
//             positionComponent.x, positionComponent.y, 
//             30, 'green'));
//             incResource(parseInt(textComponent.text));
//         }
//     });
// }
export default MouseResouceCollisionSystem;