<script setup>
import { watch } from 'vue';
    const props = defineProps(['ctx', 'x', 'y']);
    /*global ctx, x, y*/
    props.ctx.rect(props.x, props.y, 30, 30);
    props.ctx.fill();

    watch(() => props.x, (newX, oldX) => {
        props.ctx.clearRect(oldX, props.y, oldX+30, props.y+30)
        props.ctx.rect(newX, props.y, 30, 30);
        props.ctx.fill();
    })
    watch(() => props.y, (newY, oldY) => {
        props.ctx.clearRect(props.x, oldY, props.x+30, OldY+30)
        props.ctx.rect(props.x, newY, 30, 30);
        props.ctx.fill();
    })
</script>