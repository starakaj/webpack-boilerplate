import { observable } from "mobx";

export default class TestStore {
    @observable boxCount = 0;

    incrementBoxCount() {
        this.boxCount++;
    }
}
