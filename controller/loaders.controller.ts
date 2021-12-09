import UserModel from "../models/loaders.model";
import * as schedule from "node-schedule";

export async function getLoadersHandler() {
  const secondsToHms = (d: any) => {
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    const timeObj = {
      hours: h,
      minutes: m,
      secondes: s,
    };
    return timeObj;
  };

  try {
    const loaders = await UserModel.find();

    console.log(loaders);

    loaders.map((elem) => {
      const seconds: number = elem.secAfterMidnight;
      const timePlanned = secondsToHms(seconds);

      const rule = new schedule.RecurrenceRule();
      rule.hour = timePlanned.hours;
      rule.minute = timePlanned.minutes;
      rule.second = timePlanned.secondes;

      schedule.scheduleJob(rule, function () {
        console.log(elem.payload);
      });
    });
  } catch (e: any) {
    return e;
  }
}
