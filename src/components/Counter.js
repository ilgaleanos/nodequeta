import { extendObservable, computed } from 'mobx';

export default class Counter {
        constructor() {
                extendObservable(this, {
                        count: 0,
                        isOdd: computed(() => this.count % 2 === 1)
                });
        }

        increment() {
                this.count++;
        }

        decrement() {
                this.count--;
        }
}
