import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./rootStore";

export default class ModalStore {
  @observable.shallow modal = {
    open: false,
    body: null,
  };

  constructor(public rootStore: RootStore) {
    makeObservable(this);
  }

  @action openModal = (content: any) => {
    this.modal.open = true;
    this.modal.body = content;
  };

  @action closeModal = () => {
    this.modal.open = false;
    this.modal.body = null;
  };
}
