import React, { useState } from "react";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

function StarRating({ label, name, register }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const styles = themes[ACTIVE_THEME] || themes[2];

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <div className="flex gap-2 text-2xl cursor-pointer">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            className={hover >= value || rating >= value ? "text-yellow-400" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>

      <input type="hidden" value={rating} {...register(name)} />
    </div>
  );
}

export default function ProgramFeedback() {
  const { register, handleSubmit } = useForm();
  const styles = themes[ACTIVE_THEME] || themes[2];
  const onSubmit = (d) => alert(JSON.stringify(d, null, 2));

  return (
    <div className={styles.pageBg}>
      <div className="max-w-xl mx-auto">
        <Card>
          <h3 className="text-lg font-semibold mb-4 text-center">Program Feedback</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Name" className={`${styles.input} w-full mb-3`} />
            <input {...register("email")} placeholder="Email" className={`${styles.input} w-full mb-3`} />
            <select {...register("role")} className={`${styles.input} w-full mb-3`}>
              <option value="">Select Role</option>
              <option>Mentor</option>
              <option>Mentee</option>
              <option>Organizer</option>
            </select>

            <StarRating label="Program Organization" name="organization" register={register} />
            <StarRating label="Matching Process" name="matching" register={register} />
            <StarRating label="Support Provided" name="support" register={register} />
            <StarRating label="Overall Experience" name="experience" register={register} />

            <textarea {...register("general")} placeholder="General Feedback" className={`${styles.input} w-full h-24 mb-3`} />
            <textarea {...register("suggestions")} placeholder="Suggestions for Improvement" className={`${styles.input} w-full h-24 mb-3`} />

            <select {...register("again")} className={`${styles.input} w-full mb-3`}>
              <option value="">Would you participate again?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <div className="mt-3">
              <button className={styles.button + " w-full"}>Submit Feedback</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
