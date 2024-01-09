export class Observer {
  constructor(name) {

      if (Observer.instance) {
        return Observer.instance;
      }
      Observer.instance = this;
      this.name = name;
      
  }

  notify(eventData) {
      console.log(`${this.name} received notification:`, eventData);
  }
}


class Publisher {
  constructor() {
      this.observers = [];
  }

  subscribe(observer) {
      this.observers.push(observer);
  }

  unsubscribe(observer) {
      this.observers = this.observers.filter(subscriber => subscriber !== observer);
  }

  notifyObservers(eventData) {
      this.observers.forEach(observer => observer.notify(eventData));
  }
}


export const zombiePublisher = new Publisher();