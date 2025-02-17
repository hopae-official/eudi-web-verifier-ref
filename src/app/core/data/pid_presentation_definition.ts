export const PID_PRESENTATION_DEFINITION = {
	'type': 'vp_token',
	'presentation_definition': {
		'id': '32f54163-7166-48f1-93d8-ff217bdb0653',
		'input_descriptors': [
			{
				'id': 'eudi_pid',
				'name': 'EUDI PID',
				'purpose': 'We need to verify your identity',
				'constraints': {
					'fields': [
						{
							'path': [
								'$.mdoc.doctype'
							],
							'filter': {
								'type': 'string',
								'const': 'eu.europa.ec.eudiw.pid.1'
							}
						},
						{
							'path': [
								'$.mdoc.namespace'
							],
							'filter': {
								'type': 'string',
								'const': 'eu.europa.ec.eudiw.pid.1'
							}
						},
						{
							'path': [
								'$.mdoc.family_name'
							],
							'intent_to_retain': false
						},
						{
							'path': [
								'$.mdoc.given_name'
							],
							'intent_to_retain': false
						},
						{
							'path': [
								'$.mdoc.birth_date'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.age_over_18'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.age_in_years'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.age_birth_year'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.family_name_birth'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.given_name_birth'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.birth_place'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.birth_country'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.birth_state'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.birth_city'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_address'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_country'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_state'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_city'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_postal_code'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_street'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.resident_house_number'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.gender'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.nationality'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.issuance_date'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.expiry_date'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.issuing_authority'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.document_number'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.administrative_number'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.issuing_country'
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								'$.mdoc.issuing_jurisdiction'
							],
							'intent_to_retain': false
						}
					]
				}
			}
		]
	},
	'nonce' : 'nonce'
};
