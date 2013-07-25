'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
	describe('Phone list view', function(){

		beforeEach(function(){
			browser().navigateTo('../../app/index.html');
		});

		it('should filter the phone list as user types into the search box', function(){
			expect(repeater('.phones tr').count()).toBe(21);

			input('query').enter('nexus');
			expect(repeater('tr').count()).toBe(2)

			input('query').enter('motorola');
			expect(repeater('.phones tr').count()).toBe(9);
		});

		it('should be possible to control phone order via the drop down select box', function(){
			//Let's narrow the dataset to make the test assertions shorter
			input('query').enter('tablet');

			expect(repeater('tr').column('phone.name')).
				toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

			select('orderProp').option('Alphabetical');

			expect(repeater('tr').column('phone.name')).
				toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);

			select('orderProp').option('Newest');

			input('query').enter('Nexus');

			expect(repeater('tr').column('phone.name')).
				toEqual(["Nexus S"]);
		});

		it('should render phone specific links', function(){
			input('query').enter('nexus');
			//repeater('tr').column('phone.name')).click();
			element('.phones td a').click();
			expect(browser().location().url()).toBe('/phones/nexus-s');
		});
	});
});
