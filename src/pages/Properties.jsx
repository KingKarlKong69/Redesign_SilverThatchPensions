import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import { FadeIn } from '../components/animations';

const memberData = {
  name: 'Leopoldo Jr Lopez',
  memberId: '409772',
};

const properties = [
  {
    id: 1,
    name: 'Silver Thatch Pension',
    description: 'Primary defined-contribution pension plan for active employees.',
    icon: 'building',
    color: 'thatch',
    badge: {
      text: 'Silver Thatch Pension',
      icon: 'building',
      color: '--thatch',
    },
    status: { id: 1, text: 'Active', color: '--thatch', icon: 'CircleCheck' },
    createdAt: '2023-05-19T00:00:00.000Z',
    deletedAt: null,
  },
  {
    id: 2,
    name: 'Ocean Trust Fund',
    description: 'Supplemental investment fund for long-term wealth accumulation.',
    icon: 'layers',
    color: 'ocean',
    badge: {
      text: 'Ocean Trust Fund',
      icon: 'layers',
      color: '--ocean',
    },
    status: { id: 1, text: 'Active', color: '--ocean', icon: 'CircleCheck' },
    createdAt: '2022-01-15T00:00:00.000Z',
    deletedAt: null,
  },
  {
    id: 3,
    name: 'Heritage Plan',
    description: 'Legacy pension plan for senior-tenured employees.',
    icon: 'archive',
    color: 'slate-custom',
    badge: {
      text: 'Heritage Plan',
      icon: 'archive',
      color: '--slate-custom',
    },
    status: { id: 3, text: 'Archived', color: '--slate-custom', icon: 'Archive' },
    createdAt: '2020-06-01T00:00:00.000Z',
    deletedAt: '2024-01-01T00:00:00.000Z',
  },
];

/**
 * Maps a badge color in "--{colorName}" format to Tailwind utility classes.
 * Uses badge.color (not the top-level color field) to drive the visual.
 */
const getBadgeClasses = (badgeColor) => {
  const colorName = badgeColor?.replace(/^--/, '') ?? '';
  const map = {
    thatch: 'bg-thatch-100 text-thatch-700 border border-thatch-200',
    ocean: 'bg-ocean-400/10 text-ocean-600 border border-ocean-400/20',
    'slate-custom': 'bg-slate-custom-100 text-slate-custom-700 border border-slate-custom-200',
    mint: 'bg-mint-100 text-mint-600 border border-mint-200',
  };
  return map[colorName] ?? 'bg-slate-custom-100 text-slate-custom-700 border border-slate-custom-200';
};

/**
 * Maps a badge icon name string to an inline SVG path.
 * Resolves icons by name — equivalent to getLucideIcon in the Vue codebase.
 */
const getIconPath = (iconName) => {
  const paths = {
    building: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10',
    layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    archive: 'M21 8v13H3V8M1 3h22v5H1zM10 12h4',
    CircleCheck: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3',
  };
  return paths[iconName] ?? 'M12 2a10 10 0 100 20 10 10 0 000-20z';
};

const PropertyBadge = ({ badge }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeClasses(badge.color)}`}
  >
    <svg
      className="w-3.5 h-3.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d={getIconPath(badge.icon)} />
    </svg>
    {badge.text}
  </span>
);

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getBadgeClasses(status.color)}`}
  >
    <svg
      className="w-3 h-3 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d={getIconPath(status.icon)} />
    </svg>
    {status.text}
  </span>
);

const Properties = ({ onNavigate, onStartTour }) => (
  <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-thatch-50 flex flex-col">
    <DashboardHeader
      currentPage="properties"
      onNavigate={onNavigate}
      onProfileNavigate={onNavigate}
      onStartTour={onStartTour}
    />

    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Member Info Bar */}
      <FadeIn delay={0.1}>
        <div className="relative overflow-hidden bg-white backdrop-blur-md border border-slate-custom-200/30 rounded-2xl shadow-sm p-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-custom-500 mb-1 font-medium">
                MEMBER PORTAL
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-custom-900">
                {memberData.name}
              </h2>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 bg-thatch-50/50 border border-thatch-200 rounded-xl">
              <div className="w-2 h-2 bg-thatch-500 rounded-full" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-custom-600">ID</span>
                <span className="text-slate-custom-900 font-bold text-base">{memberData.memberId}</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Properties Table */}
      <FadeIn delay={0.2}>
        <div className="bg-white border border-slate-custom-200/40 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-slate-custom-400 to-slate-custom-500 px-6 py-4">
            <h3 className="text-white font-bold text-lg">Plan Properties</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-custom-50 border-b border-slate-custom-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-custom-700 w-48">
                    Preview
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-custom-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-custom-700">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-custom-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-custom-100">
                {properties.map((property) => (
                  // No whileHover on the row — the hover effect belongs only to action buttons
                  <tr key={property.id} className="transition-colors">
                    {/* Preview column — uses badge.icon and badge.color, not property.icon/color */}
                    <td className="px-6 py-4">
                      <PropertyBadge badge={property.badge} />
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-custom-900">
                      {property.name}
                    </td>
                    <td className="px-6 py-4 text-slate-custom-600 text-sm">
                      {property.description ?? '—'}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={property.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </main>

    <Footer />
  </div>
);

export default Properties;
