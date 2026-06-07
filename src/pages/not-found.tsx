import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <CardContent className="pt-6">
          <div className={styles.header}>
            <AlertCircle className={styles.icon} />
            <h1 className={styles.title}>404 Page Not Found</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
