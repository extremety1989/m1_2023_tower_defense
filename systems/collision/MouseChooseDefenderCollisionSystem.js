import {entityManager} from "../../scripts/EntityManager.js";

function MouseChooseDefenderCollisionSystem(mouseX, mouseY, mouseWidth, mouseHeight) {
    let collided = null;
    entityManager.chooses.forEach(entity => {
        const positionComponent = entity.getComponent("PositionComponent");
        const sizeComponent = entity.getComponent("SizeComponent");
        const collisionComponent = entity.getComponent("CollisionComponent");

        if (collisionComponent === undefined ||
            positionComponent === undefined || sizeComponent === undefined) return;
        if (!(
            positionComponent.x > mouseX + mouseWidth ||
            positionComponent.x + sizeComponent.width < mouseX ||
            positionComponent.y > mouseY + mouseHeight ||
            positionComponent.y + sizeComponent.height < mouseY
         )
        ) {
        collided = entity;
    }
    });
    return collided;
}

export default MouseChooseDefenderCollisionSystem;