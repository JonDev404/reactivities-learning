import { action, makeObservable, observable, reaction } from "mobx";
import { RootStore } from "./rootStore";

export default class CommonStore {
  @observable token: string | null = window.localStorage.getItem("jwt");
  @observable appLoaded = false;

  constructor(public rootStore: RootStore) {
    makeObservable(this);

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem("jwt", token);
        } else {
          window.localStorage.removeItem("jwt");
        }
      }
    );
  }

  @action setToken = (token: string | null) => {
    this.token = token;
  };

  @action setAppLoaded = () => {
    this.appLoaded = true;
  };
}
