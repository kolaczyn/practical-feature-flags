import { isAboutEnabled, isCounterEnabled } from "./flags";

export function FlagsInfo() {
  return (
    <table>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>isAboutEnabled</td>
          <td>{isAboutEnabled ? "✅" : "❌"}</td>
        </tr>
        <tr>
          <td>isCounterEnabled</td>
          <td>{isCounterEnabled ? "✅" : "❌"}</td>
        </tr>
      </tbody>
    </table>
  );
}
