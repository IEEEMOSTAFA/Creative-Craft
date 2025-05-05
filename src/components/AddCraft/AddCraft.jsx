import React from 'react';
import { useForm } from 'react-hook-form';

const AddCraft = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        setValue,
        trigger
    } = useForm({
        defaultValues: {
            image: '',
            item_name: '',
            subcategory_Name: '',
            description: '',
            price: '',
            rating: '',
            customization: 'no',
            processing_time: '3-5 business days',
            stockStatus: 'In Stock',
            userEmail: '',
            userName: ''
        }
    });

    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    const customization = watch('customization');
    const stockStatus = watch('stockStatus');

    // Common processing times for quick selection
    const processingTimes = [
        '1-2 business days',
        '3-5 business days',
        '1 week',
        '2 weeks',
        'Made to order'
    ];

    const onSubmit = async (data) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', data);
            setSubmitSuccess(true);
            reset();
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    // Auto-fill description based on item name and category
    const generateDescription = () => {
        const itemName = watch('item_name');
        const category = watch('subcategory_Name');
        if (itemName && category) {
            setValue('description', 
                `This beautiful ${itemName.toLowerCase()} is handcrafted in our ${category.toLowerCase()} workshop. ` +
                `Each piece is carefully made with attention to detail and quality materials. ` +
                `Perfect for gifts or to add a special touch to your home decor.`
            );
            trigger('description');
        }
    };

    // Set default processing time based on stock status
    React.useEffect(() => {
        if (stockStatus === 'Made to Order') {
            setValue('processing_time', '2-3 weeks');
            trigger('processing_time');
        } else if (watch('processing_time') === '2-3 weeks') {
            setValue('processing_time', '3-5 business days');
        }
    }, [stockStatus, setValue, trigger, watch]);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add Your Craft Item</h2>
            
            {submitSuccess && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded text-center">
                    ✅ Craft item added successfully!
                </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Item Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Item Name *
                            <span className="text-xs text-gray-500 ml-1">(e.g., "Handmade Ceramic Vase")</span>
                        </label>
                        <input
                            type="text"
                            {...register("item_name", { required: "Item name is required" })}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.item_name ? 'border-red-500' : 'border'}`}
                            placeholder="What's your item called?"
                            onBlur={generateDescription}
                        />
                        {errors.item_name && <p className="mt-1 text-sm text-red-600">{errors.item_name.message}</p>}
                    </div>
                    
                    {/* Subcategory */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Category *
                            <span className="text-xs text-gray-500 ml-1">(e.g., "Pottery", "Jewelry")</span>
                        </label>
                        <input
                            type="text"
                            {...register("subcategory_Name", { required: "Category is required" })}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.subcategory_Name ? 'border-red-500' : 'border'}`}
                            placeholder="What type of craft is this?"
                            onBlur={generateDescription}
                        />
                        {errors.subcategory_Name && <p className="mt-1 text-sm text-red-600">{errors.subcategory_Name.message}</p>}
                    </div>
                </div>
                
                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Image URL *
                        <span className="text-xs text-gray-500 ml-1">(Paste a link to your product image)</span>
                    </label>
                    <input
                        type="url"
                        {...register("image", {
                            required: "Image URL is required",
                            pattern: {
                                value: /^https?:\/\/.+\/.+$/,
                                message: "Please enter a valid URL starting with http:// or https://"
                            }
                        })}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.image ? 'border-red-500' : 'border'}`}
                        placeholder="https://example.com/your-product.jpg"
                    />
                    {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>}
                </div>
                
                {/* Description - with auto-generation */}
                <div>
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-gray-700">
                            Description *
                            <span className="text-xs text-gray-500 ml-1">(Minimum 20 characters)</span>
                        </label>
                        <button
                            type="button"
                            onClick={generateDescription}
                            className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
                            disabled={!watch('item_name') || !watch('subcategory_Name')}
                        >
                            Generate Description
                        </button>
                    </div>
                    <textarea
                        {...register("description", {
                            required: "Description is required",
                            minLength: {
                                value: 20,
                                message: "Description should be at least 20 characters"
                            }
                        })}
                        rows={4}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.description ? 'border-red-500' : 'border'}`}
                        placeholder="Describe your item's features, materials, and unique qualities..."
                    />
                    <div className="flex justify-between">
                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
                        <span className="text-xs text-gray-500">
                            {watch('description')?.length || 0}/1000 characters
                        </span>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Price ($) *
                            <span className="text-xs text-gray-500 ml-1">(Numbers only)</span>
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                type="number"
                                step="0.01"
                                {...register("price", {
                                    required: "Price is required",
                                    min: { value: 0.01, message: "Price must be greater than 0" }
                                })}
                                className={`block w-full pl-7 pr-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.price ? 'border-red-500' : 'border'}`}
                                placeholder="29.99"
                            />
                        </div>
                        {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
                    </div>
                    
                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Rating (Optional)
                            <span className="text-xs text-gray-500 ml-1">(0-5)</span>
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            {...register("rating", {
                                validate: (value) => 
                                    !value || (value >= 0 && value <= 5) || "Rating must be between 0 and 5"
                            })}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.rating ? 'border-red-500' : 'border'}`}
                            placeholder="4.5"
                        />
                        {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Customization */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Customization Options
                        </label>
                        <select
                            {...register("customization")}
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        >
                            <option value="no">No customization</option>
                            <option value="yes">Customization available</option>
                        </select>
                        {customization === 'yes' && (
                            <p className="mt-1 text-xs text-gray-500">
                                Tip: Mention customization options in your description
                            </p>
                        )}
                    </div>
                    
                    {/* Stock Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Stock Status
                        </label>
                        <select
                            {...register("stockStatus")}
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        >
                            <option value="In Stock">In Stock (ready to ship)</option>
                            <option value="Made to Order">Made to Order (custom made)</option>
                        </select>
                    </div>
                </div>
                
                {/* Processing Time - with smart defaults */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Processing Time *
                        <span className="text-xs text-gray-500 ml-1">(How long before shipping)</span>
                    </label>
                    <select
                        {...register("processing_time", { required: "Processing time is required" })}
                        className={`mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${errors.processing_time ? 'border-red-500' : ''}`}
                    >
                        {processingTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                    {errors.processing_time && <p className="mt-1 text-sm text-red-600">{errors.processing_time.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Your Email *
                            <span className="text-xs text-gray-500 ml-1">(For contact)</span>
                        </label>
                        <input
                            type="email"
                            {...register("userEmail", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email"
                                }
                            })}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.userEmail ? 'border-red-500' : 'border'}`}
                            placeholder="your@email.com"
                        />
                        {errors.userEmail && <p className="mt-1 text-sm text-red-600">{errors.userEmail.message}</p>}
                    </div>
                    
                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Your Name *
                            <span className="text-xs text-gray-500 ml-1">(Who's listing this item?)</span>
                        </label>
                        <input
                            type="text"
                            {...register("userName", { required: "Name is required" })}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.userName ? 'border-red-500' : 'border'}`}
                            placeholder="Your name or shop name"
                        />
                        {errors.userName && <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>}
                    </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Adding Item...
                            </>
                        ) : (
                            'List My Craft Item'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCraft;