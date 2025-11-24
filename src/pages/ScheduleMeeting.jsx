import React from "react";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { platforms } from "../data/mockData";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

export default function ScheduleMeeting() {
  const { register, handleSubmit } = useForm();
  const styles = themes[ACTIVE_THEME] || themes[2];
  const onSubmit = (d) => alert(JSON.stringify(d, null, 2));

  return (
    <div className={styles.pageBg}>
      <div className="max-w-2xl mx-auto">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Mentorship Scheduling Form</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("menteeName")} placeholder="Mentee Name" className={`${styles.input} w-full mb-3`} />
            <input {...register("menteeEmail")} placeholder="Mentee Email" className={`${styles.input} w-full mb-3`} />
            <input {...register("mentorName")} placeholder="Mentor Name" className={`${styles.input} w-full mb-3`} />
            <input {...register("mentorEmail")} placeholder="Mentor Email" className={`${styles.input} w-full mb-3`} />

            <div className="grid grid-cols-2 gap-3">
              <input {...register("date")} type="date" className={`${styles.input} w-full mb-3`} />
              <input {...register("time")} type="time" className={`${styles.input} w-full mb-3`} />
            </div>

            <input {...register("duration")} placeholder="Duration (minutes)" className={`${styles.input} w-full mb-3`} />

            <select {...register("platform")} className={`${styles.input} w-full mb-3`}>
              <option value="">-- Select Platform --</option>
              {platforms.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <input {...register("link")} placeholder="Meeting Link" className={`${styles.input} w-full mb-3`} />
            <textarea {...register("agenda")} placeholder="Agenda / Notes" className={`${styles.input} w-full h-24 mb-3`} />

            <div className="mt-3">
              <button className={styles.button + " w-full"}>Schedule Meeting</button>
            </div>

            <div className="text-center mt-3">
              <a href="/" className="text-sm text-blue-600">← Back to Home</a>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
