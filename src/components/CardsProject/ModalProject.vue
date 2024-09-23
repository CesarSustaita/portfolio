<!-- Componente ModalProject.vue -->
<script>
import { watch } from 'vue';

export default {
  name: 'ModalProject',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    
  },
  setup(props, { emit }) {
    watch(
      () => props.show,
      (newVal) => {
        if (newVal) {
          document.body.style.overflow = 'hidden';
        } else {
          resetOverflow();
        }
      }
    );

    const resetOverflow = () => {
      document.body.style.overflow = 'auto';
    };

    const handleClose = () => {
      resetOverflow();
      emit('close');
    };

    return {
      handleClose,
    };
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click.self="handleClose">
      <div class="modal-container">
        <section class="modal-header">
          <slot  name="header"></slot>
          <div class="cancel" @click="$emit('close')" ></div>
        </section>

        <section class="modal-body">
          <div class="description">
            <slot name="description"></slot>
          </div>
          <span class="line"></span>
          <div class="info">
            <div class="info-container">
              <section class="section-info">
                <div class="info-values">Project Date</div>
                <div class="content"><slot name="projectDate"></slot></div>
              </section>
              <section class="section-info">
                <div class="info-values">Position</div>
                <div class="content"><slot name="position"></slot></div>
              </section>
            </div>
            <div class="info-container">
              <section class="section-info">
                <div class="info-values">Location</div>
                <div class="content"><slot name="location"></slot></div>
              </section>
              <section class="section-info">
                <div class="info-values">Built with</div>
                <div class="content"><slot name="build"></slot></div>
              </section>
            </div>
          </div>
        </section>

        <div class="modal-footer">
          <section class="btn-link"  >
                <button  class="btn-primary">Explore Project</button>
                <div class="arrow-link"></div>
          </section> 
          <button @click="handleClose" class="btn-seconday">Close</button>
        </div>
      </div>
    </div>
  </Transition>
</template>


<style scoped>

.btn-link{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    border: 1px solid rgba(105, 105, 105, 0);
    border-radius: 8px;
    padding: 8px 14px;
    background-color: rgba(25, 25, 25, 0.763);
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
}

.btn-link:hover{
  display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    border: 1px solid rgba(105, 105, 105, 0);
    border-radius: 8px;
    padding: 8px 14px;
    background-color: rgba(25, 25, 25, 0.564);
    backdrop-filter: blur(50px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
}

.btn-seconday{
  border-radius: 8px;
  padding: 8px 14px;
  border: 1px solid rgba(62, 62, 62, 0.5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.btn-seconday:hover{
  border-radius: 8px;
  padding: 8px 14px;
  border: 1px solid rgba(62, 62, 62, 0.5);
  background-color: rgba(80, 80, 80, 0.301);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.arrow-link{
    background-image: url('/src/assets/icons/Arrow up-right.svg');
    width: 22px;
    height: 22px;
    object-fit: cover;
    object-position: center;
    align-items: center;
}

button {
    all: unset;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    font-size: 18px;
    
    color: var(--text-bg-white-date);

}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.282);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 24px;
  width: 530px;
  position: relative;
  background-color: rgba(94, 94, 94, 0.164);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(105, 105, 105, 0.5);
  transition: all 0.3s ease;
  box-shadow: rgba(50, 50, 50, 0.19) 0px 10px 20px, rgba(54, 54, 54, 0.23) 0px 6px 6px;

}

.modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
}

.modal-body {
  margin-top: 12px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
}

.description {
  font-size: 16px;
}

.line {
  border: 1px solid #8c8c8c34;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 18px;
}

.info{
  gap: 30px;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}

.info-container{
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.section-info{
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 4px;
}

.info-values{
  font-weight: 600;
  font-size: 16px;
}

.content{
  font-weight: 400;
  font-size: 16px;
}

.modal-footer {
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  gap: 16px;
}

.modal-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.cancel {
  float: right;
  height: 20px;
  width: 20px;
  cursor: pointer;
  background-image: url('/src/assets/icons/Close.svg');
  background-position: center;
  background-repeat: no-repeat;
}

.cancel:hover {
  float: right;
  height: 20px;
  width: 20px;
  cursor: pointer;
  background-image: url('/src/assets/icons/Close-Hover.svg');
  background-position: center;
  background-repeat: no-repeat;
}

.arrow-link{
    background-image: url('/src/assets/icons/Arrow up-right.svg');
    width: 22px;
    height: 25px;
    object-fit: cover;
    object-position: center;
    align-items: center;
    margin-left: 2px;
}

@media (max-width: 700px) {

.modal-container {
  width: 352px;
}

.modal-header {
  font-size: 28px;
}

.description {
  font-size: 15px;
}

.info-values{
  font-weight: 600;
  font-size: 16px;
}

.content{
  font-weight: 400;
  font-size: 15px;
}

}
</style>
