import React, { useState } from "react";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

export default function UpdateMeetingStatus() {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState("Completed");
  const styles = themes[ACTIVE_THEME] || themes[2];
  const onSubmit = (d) => alert(JSON.stringify(d, null, 2));

  return (
    <div className={styles.pageBg}>
      <div className="max-w-md mx-auto">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Meeting Status Updation</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("menteeName")} placeholder="Mentee Name (Autofetched)" className={`${styles.input} w-full mb-3`} />
            <input {...register("mentorName")} placeholder="Mentor Name (Autofetched)" className={`${styles.input} w-full mb-3`} />
            <input {...register("date")} type="date" className={`${styles.input} w-full mb-3`} />

            <select
              {...register("status")}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`${styles.input} w-full mb-3`}
            >
              <option>Completed</option>
              <option>Postponed</option>
            </select>

            {status === "Completed" ? (
              <textarea {...register("minutes")} placeholder="Enter meeting summary" className={`${styles.input} w-full h-24 mb-3`} />
            ) : (
              <textarea {...register("reason")} placeholder="Enter reason for postponement" className={`${styles.input} w-full h-24 mb-3`} />
            )}

            <div className="mt-3">
              <button className={styles.button + " w-full"}>Submit</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
