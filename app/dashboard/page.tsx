import Card from '../../components/Card';
import ChatAssistant from '../../components/ChatAssistant';

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="lg:col-span-2">
        <div className="flex gap-4">
          <Card>
            <h3 className="text-lg font-medium">Upcoming appointments</h3>
            <div className="mt-3 text-sm text-slate-600">No upcoming appointments in this demo.</div>
          </Card>
          <Card>
            <h3 className="text-lg font-medium">Statistics</h3>
            <div className="mt-3 text-sm text-slate-600">Active users: 42</div>
          </Card>
        </div>
      </section>

      <aside>
        <Card>
          <h3 className="text-lg font-medium">AI Assistant</h3>
          <div className="mt-3">
            <ChatAssistant />
          </div>
        </Card>
      </aside>
    </div>
  );
}
