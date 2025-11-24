import React from "react";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { mentors, mentees, phases } from "../data/mockData";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

export default function AssignmentForm() {
  const { register, handleSubmit } = useForm({ defaultValues: { mentor: "", phase: "" } });
  const styles = themes[ACTIVE_THEME] || themes[2];
  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <div className={styles.pageBg}>
      <div className="max-w-2xl mx-auto">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Mentee-Mentor Assignment</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-1">Mentor Name *</label>
              <select {...register("mentor")} className={`${styles.input} w-full`}>
                <option value="">-- Select Mentor --</option>
                {mentors.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Phase of Mentorship</label>
              <select {...register("phase")} className={`${styles.input} w-full`}>
                <option value="">-- Select Phase --</option>
                {phases.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block mb-1">Mentee 1 *</label>
                <select {...register("mentee1")} className={`${styles.input} w-full`}>
                  <option value="">-- Select Mentee --</option>
                  {mentees.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">Mentee 2 (Optional)</label>
                <select {...register("mentee2")} className={`${styles.input} w-full`}>
                  <option value="">-- Select Mentee --</option>
                  {mentees.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">Mentee 3 (Optional)</label>
                <select {...register("mentee3")} className={`${styles.input} w-full`}>
                  <option value="">-- Select Mentee --</option>
                  {mentees.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-300 rounded">At least 1 mentee is mandatory for each mentor. Maximum 3 mentees can be assigned.</div>

            <div className="mt-4">
              <button className={styles.button + " w-full"}>Assign Mentor</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
