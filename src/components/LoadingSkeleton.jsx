/**
 * Reusable loading skeleton components for better perceived performance
 */

export const SkeletonPulse = ({ className = '' }) => (
  <div className={`animate-pulse bg-cream-300 rounded ${className}`} />
);

export const ProductCardSkeleton = () => (
  <div className="card">
    <div className="relative h-64 overflow-hidden">
      <SkeletonPulse className="w-full h-full" />
    </div>
    <div className="p-6 space-y-4">
      <SkeletonPulse className="h-6 w-3/4" />
      <SkeletonPulse className="h-4 w-full" />
      <SkeletonPulse className="h-4 w-5/6" />
      <div className="flex gap-2">
        <SkeletonPulse className="h-6 w-20 rounded-full" />
        <SkeletonPulse className="h-6 w-24 rounded-full" />
        <SkeletonPulse className="h-6 w-16 rounded-full" />
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="card p-6">
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <SkeletonPulse key={i} className="w-5 h-5 rounded" />
      ))}
    </div>
    <div className="space-y-2 mb-6">
      <SkeletonPulse className="h-4 w-full" />
      <SkeletonPulse className="h-4 w-full" />
      <SkeletonPulse className="h-4 w-3/4" />
    </div>
    <div className="flex items-center space-x-3">
      <SkeletonPulse className="w-10 h-10 rounded-full" />
      <div className="space-y-2">
        <SkeletonPulse className="h-4 w-24" />
        <SkeletonPulse className="h-3 w-16" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-warm-gradient pt-20">
    <div className="container-custom text-center px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <SkeletonPulse className="h-8 w-48 mx-auto rounded-full" />
        <SkeletonPulse className="h-16 w-full" />
        <SkeletonPulse className="h-16 w-3/4 mx-auto" />
        <SkeletonPulse className="h-6 w-full max-w-2xl mx-auto" />
        <SkeletonPulse className="h-6 w-4/5 max-w-xl mx-auto" />
        <div className="flex gap-4 justify-center pt-4">
          <SkeletonPulse className="h-14 w-40 rounded-full" />
          <SkeletonPulse className="h-14 w-36 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export const PageHeaderSkeleton = () => (
  <div className="bg-gradient-to-br from-cream-50 to-honey-50 py-8 md:py-16">
    <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
      <SkeletonPulse className="h-12 w-64 mx-auto mb-6" />
      <SkeletonPulse className="h-6 w-full max-w-2xl mx-auto" />
    </div>
  </div>
);

export default {
  SkeletonPulse,
  ProductCardSkeleton,
  TestimonialSkeleton,
  HeroSkeleton,
  PageHeaderSkeleton,
};
